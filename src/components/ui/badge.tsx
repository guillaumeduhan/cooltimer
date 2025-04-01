import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-woodsmoke-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-woodsmoke-950 focus:ring-offset-2 dark:border-woodsmoke-800 dark:focus:ring-woodsmoke-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-woodsmoke-900 text-woodsmoke-50 shadow hover:bg-woodsmoke-900/80 dark:bg-woodsmoke-50 dark:text-woodsmoke-900 dark:hover:bg-woodsmoke-50/80",
        secondary:
          "border-transparent bg-woodsmoke-100 text-woodsmoke-900 hover:bg-woodsmoke-100/80 dark:bg-woodsmoke-800 dark:text-woodsmoke-50 dark:hover:bg-woodsmoke-800/80",
        destructive:
          "border-transparent bg-red-500 text-woodsmoke-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-woodsmoke-50 dark:hover:bg-red-900/80",
        outline: "text-woodsmoke-950 dark:text-woodsmoke-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
