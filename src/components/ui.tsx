import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "press inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium",
        "disabled:pointer-events-none disabled:opacity-40",
        variant === "primary" && "bg-ink text-ink-fg hover:opacity-90",
        variant === "secondary" && "border border-line-strong bg-surface text-fg hover:bg-surface-2",
        variant === "ghost" && "text-fg hover:bg-surface-2",
        className,
      )}
      {...props}
    />
  );
}

export function Frame({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-4 pt-8 pb-16 sm:pt-12">{children}</div>;
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-sm font-medium text-muted">{kicker}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-3 text-base text-muted">{lede}</p>
    </header>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("rounded-3xl border border-line bg-surface p-4", className)}>{children}</section>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-3xl border border-line bg-surface p-4">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-2 space-y-2 text-sm text-muted">{children}</div>
    </aside>
  );
}

export function FieldLabel({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {hint ? <span className="mt-1 block text-sm text-muted">{hint}</span> : null}
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const controlClass =
  "h-11 w-full rounded-lg border border-line-strong bg-bg px-3 text-sm tabular-nums text-fg";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={controlClass} {...props} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(controlClass, "tabular-nums")} {...props} />;
}

export function Choice({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        "press inline-flex h-11 items-center rounded-full px-3 text-sm font-medium",
        checked ? "bg-ink text-ink-fg" : "border border-line-strong bg-surface text-fg hover:bg-surface-2",
      )}
    >
      {label}
    </button>
  );
}

export function CheckRow({
  checked,
  label,
  detail,
  onChange,
}: {
  checked: boolean;
  label: string;
  detail: string;
  onChange: () => void;
}) {
  return (
    <label className="flex min-h-11 cursor-pointer gap-3 border-b border-line py-3 last:border-b-0">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 size-4 accent-ink"
      />
      <span>
        <span className={cn("block text-sm font-medium", checked && "text-muted line-through")}>{label}</span>
        <span className="mt-1 block text-sm text-muted">{detail}</span>
      </span>
    </label>
  );
}
