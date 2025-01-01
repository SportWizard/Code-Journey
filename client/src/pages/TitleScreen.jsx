import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function TitleScreen() {
    const navigate = useNavigate();
    const [transition, setTransition] = useState(false);

    const transitionTime = 1;

    const start = () => {
        setTransition(true);
    }

    const animationComplete = () => {
        if (transition)
            navigate("/road-map");
    }

    return(
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: transition ? 0 : 1 }}
            transition={{ duration: transitionTime }}
            onAnimationComplete={animationComplete}
            
            className="d-flex justify-content-center align-items-center"
            style={{
                height: "100vh",
                flexDirection: "column"
            }}
        >
            {/* Transition up */}
            <motion.h1
                initial={{ y: 0 }}
                animate={{ y: transition ? "-100vw" : 0 }}
                transition={{ duration: 1.5 * transitionTime }}
                onAnimationComplete={animationComplete}

                style={{
                    fontFamily: "cursive",
                    fontSize: "100px",
                    marginBottom: "100px"
                }}
            >
                Code Journey
            </motion.h1>

            {/* Transition down */}
            <motion.button
                initial={{ y: 0 }}
                animate={{ y: transition ? "100vw" : 0 }}
                transition={{ duration: 1.5 * transitionTime }}
                onAnimationComplete={animationComplete}

                whileHover={{ scale: 1.5 }}

                className="btn btn-primary"
                onClick={start}
            >
                Start
            </motion.button>
        </motion.div>
    );
}

export default TitleScreen;