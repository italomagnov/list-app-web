type BtnProps = {
    text: string;
    icon: React.ReactElement;
};

export const Button = (props: BtnProps) => {
    return (
        <button className="flex justify-center items-center gap-4 text-base">
            {props.text}
            {props.icon}
        </button>
    );
};
