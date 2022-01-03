import Navigation from "./navigation"

export default function Container(props) {
    return (
        <div>
            <Navigation/>
            <div>
                {props.children}
            </div>
        </div>
    )
}
