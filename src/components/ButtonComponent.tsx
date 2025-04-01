'use client';
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type ButtonComponentProps = {
  loading?: boolean,
  disabled?: boolean,
  onClick?: () => void,
  label?: string,
  children?: React.ReactNode,
  className?: string,
  variant?: any
}

const ButtonComponent = ({
  loading = false, disabled = false, onClick, label = "Save", children, className, variant
}: ButtonComponentProps) => {
  return <Button
    variant={variant}
    className={`font-[600] bg-gradient-to-br from-woodsmoke-700 to-woodsmoke-900 hover:scale-[102%] transition cursor-pointer ${className} dark:text-white`}
    disabled={loading || disabled}
    onClick={onClick}
    style={{
      cursor: "pointer"
    }}
  >
    {!loading && <>
      {children}
      {label}
    </>}
    {loading && <Loader2 className="animate-spin" />}
  </Button>;
};

export default ButtonComponent;