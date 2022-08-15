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
        if (demo === null) {
            if (locale === "es") {
                Swal.fire({
                    title: "Lo siento",
                    text: "Aún no está desplegado",
                    icon: "info",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#00B1D8"
                });
            } else {
                Swal.fire({
                    title: "Sorry",
                    text: "We  isn't deployed it yet",
                    icon: "info",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#00B1D8"
                });
            }
            
        }

        if(demo !== null ){
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
