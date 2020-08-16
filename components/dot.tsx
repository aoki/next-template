type Props = {
    size?: number;
    color?: string;
    radius?: number;
}

const Dot:  React.FC<Props> = (props) => {

    return (
    <>
        <div />
        <style jsx>{`
            div {
                width: ${props.size}px;
                height: ${props.size}px;
                border-radius: 50%;
                background-color: ${props.color};
                box-shadow: 0px 0px ${props.size}px ${props.size/5}px ${props.color};
                margin: ${props.size}px;
            }
        `}
        </style>
    </>
    )
}

Dot.defaultProps = {
    size: 12,
    color: "#EA39B2",
    radius: 50
}

export default Dot;