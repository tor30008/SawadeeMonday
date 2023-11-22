import { useRouteError } from "react-router-dom";

export default function Errorpage(){
    const error = useRouteError();
    console.log(error);

    return(
        <>
            <div>
                <h2>Error</h2>
                <p>
                    <i>{error.statusError || error.message}</i>
                </p>
            </div>
        </>
    )
}