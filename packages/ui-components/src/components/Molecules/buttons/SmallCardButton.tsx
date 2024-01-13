import React, { ReactNode } from "react";

export const SmallCardButton = ({
	children,
	className,
	onClick,
}: {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}) => (
	<div
		className={`flex gap-1 items-center justify-center bg-pr-c-black3 rounded-base cursor-pointer p-1 ${className}`}
		onClick={onClick}
	>
		{children}
	</div>
);
