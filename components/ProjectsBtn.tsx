import React from "react";
import Swal from "sweetalert2";
import { useRouter } from 'next/router'

interface ButtonData {
    locale: string | undefined;
    demo: string | null;
}

const ProjectsBtn = ({ demo, locale }: ButtonData) => {
    const router = useRouter();

    const handleClick = () => {
        console.log('click')
        console.log(demo)
        if (demo === null) {
            if (locale === "es") {
                Swal.fire({
                    title: "Lo siento",
                    text: "Aún no lo hemos desplegado",
                    icon: "info",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#00B1D8"
                });
            }
            Swal.fire({
                title: "Sorry",
                text: "We have not deployed it yet",
                icon: "info",
                confirmButtonText: "OK",
                confirmButtonColor: "#00B1D8"
            });
        }

        if(demo !==null ){
            //This could be better
            router.push(demo);
        }
    };

    return (
        <div className="btn__container">
            <button onClick={handleClick} className="button__projects">Demo</button>
        </div>
    );
};

export default ProjectsBtn;
