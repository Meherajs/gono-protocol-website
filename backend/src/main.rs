use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};

// ================================
// Data Models
// ================================

#[derive(Serialize)]
struct HealthResponse {
    status: String,
    version: String,
    timestamp: String,
}

#[derive(Serialize)]
struct StatsResponse {
    assets_registered: String,
    active_users: String,
    partners: u32,
}

#[derive(Serialize)]
struct Feature {
    id: u32,
    title: String,
    description: String,
    icon: String,
}

#[derive(Serialize)]
struct ArchiveItem {
    id: u32,
    emoji: String,
    category: String,
    title: String,
    excerpt: String,
    date: String,
    hash: String,
}

// ================================
// API Handlers
// ================================

#[get("/api/health")]
async fn health_check() -> impl Responder {
    let response = HealthResponse {
        status: "healthy".to_string(),
        version: "1.0.0".to_string(),
        timestamp: chrono::Utc::now().to_rfc3339(),
    };
    HttpResponse::Ok().json(response)
}

#[get("/api/stats")]
async fn get_stats() -> impl Responder {
    let stats = StatsResponse {
        assets_registered: "10M+".to_string(),
        active_users: "100K+".to_string(),
        partners: 50,
    };
    HttpResponse::Ok().json(stats)
}

#[get("/api/features")]
async fn get_features() -> impl Responder {
    let features = vec![
        Feature {
            id: 1,
            title: "Blockchain Provenance".to_string(),
            description: "Every digital asset receives an immutable blockchain record.".to_string(),
            icon: "blockchain".to_string(),
        },
        Feature {
            id: 2,
            title: "Real-time Verification".to_string(),
            description: "Instantly verify the authenticity of any digital content.".to_string(),
            icon: "verify".to_string(),
        },
        Feature {
            id: 3,
            title: "Decentralized Storage".to_string(),
            description: "Content stored across a distributed network.".to_string(),
            icon: "storage".to_string(),
        },
        Feature {
            id: 4,
            title: "AI Detection".to_string(),
            description: "Identify AI-generated content and deepfakes.".to_string(),
            icon: "ai".to_string(),
        },
        Feature {
            id: 5,
            title: "Global Standards".to_string(),
            description: "Compatible with C2PA, IPTC, and EIP-7053.".to_string(),
            icon: "globe".to_string(),
        },
    ];
    HttpResponse::Ok().json(features)
}

#[get("/api/archive")]
async fn get_archive() -> impl Responder {
    let archive = vec![
        ArchiveItem {
            id: 1,
            emoji: "🌍".to_string(),
            category: "Planet".to_string(),
            title: "Climate Summit 2024".to_string(),
            excerpt: "Historic agreements captured with blockchain provenance.".to_string(),
            date: "Dec 15, 2024".to_string(),
            hash: "0x8f3d...2e1a".to_string(),
        },
        ArchiveItem {
            id: 2,
            emoji: "🗳️".to_string(),
            category: "Politics".to_string(),
            title: "Global Elections 2024".to_string(),
            excerpt: "Verified documentation of electoral events worldwide.".to_string(),
            date: "Nov 5, 2024".to_string(),
            hash: "0x2a7c...9f4b".to_string(),
        },
        ArchiveItem {
            id: 3,
            emoji: "🤖".to_string(),
            category: "Tech".to_string(),
            title: "AI Revolution".to_string(),
            excerpt: "Documenting the rapid advancement of AI.".to_string(),
            date: "Oct 22, 2024".to_string(),
            hash: "0x5e9a...1c3d".to_string(),
        },
    ];
    HttpResponse::Ok().json(archive)
}

// ================================
// Main Server
// ================================

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("🚀 Numbers Protocol Backend starting...");
    println!("📡 Server running at http://localhost:8080");

    HttpServer::new(|| {
        // Configure CORS
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_origin("http://127.0.0.1:3000")
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec![
                actix_web::http::header::AUTHORIZATION,
                actix_web::http::header::ACCEPT,
                actix_web::http::header::CONTENT_TYPE,
            ])
            .max_age(3600);

        App::new()
            .wrap(cors)
            .service(health_check)
            .service(get_stats)
            .service(get_features)
            .service(get_archive)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
