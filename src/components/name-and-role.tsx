import {site} from "@/lib/site-config";

type Props = {
    hideName?: boolean;
    hideRole?: boolean;
};

export default function NameAndRole({hideName, hideRole}: Props) {
    return (
        <p
            className="animate-fade-in-up mb-5 font-heading text-sm font-bold uppercase tracking-widest text-text-main"
            style={{animationDelay: "0ms"}}
        >
            {!hideName && site.name}
            <span className="mt-1 block text-xs font-medium normal-case tracking-normal text-text-muted">
                            {!hideRole && site.role}
                        </span>
        </p>
    );
}
