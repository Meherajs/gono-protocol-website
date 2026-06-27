export function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div
            className={`animate-pulse bg-white/[0.05] rounded ${className}`}
        />
    );
}

export function CardSkeleton() {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <Skeleton className="w-12 h-12 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    );
}

export function ArchiveSkeleton() {
    return (
        <div className="glass rounded-2xl overflow-hidden">
            <Skeleton className="h-44 w-full rounded-none" />
            <div className="p-6 space-y-3">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between pt-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-24" />
                </div>
            </div>
        </div>
    );
}

export function StatSkeleton() {
    return (
        <div className="flex flex-col gap-1">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-4 w-24" />
        </div>
    );
}
