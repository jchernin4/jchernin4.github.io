interface HighlightProps {
    value: string;
    label: string;
}

export default function Highlight({ value, label }: HighlightProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 font-bold">{value}</span>
            </div>
            <span className="text-stone-600 dark:text-stone-400">{label}</span>
        </div>
    );
}
