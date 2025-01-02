import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoadMap.css";

const requestURL = "http://localhost:8080/road-map";

function CreateCoursesTabs({ type, buttonActivate }) {
    const [courses, setCourses] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(requestURL + type)
        .then((res) => {
            if (res.status === 200) {
                console.log("Data fetched successfully");

                setCourses(res.data);
                setLoaded(true);
            }
            else {
                console.log("Request was not successful");
            }
        })
        .catch((err) => {
            console.error('Error fetching data:', err);
        });
    }, [type]); // Only trigger fetch when "type" changes

    if (!loaded)
        return <p>Loading...</p>
    
    return (
        <>
            {courses.map((course, index) => (
                <button key={index} className="courseButtons" onClick={() => {
                    let route = "/" + course.name.replace(/\s+/g, "-").toLowerCase();
                    buttonActivate(route);
                }}>
                    <h1>{course.name}</h1>
                    <p>Tier: {course.tier}</p>
                </button>
            ))}
        </>
    );
}

function RoadMap() {
    const navigate = useNavigate();

    const buttonActivate = (route) => {
        navigate(route);
    }
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
        >
            {/* Main Courses */}
            <div className="courses">
                <h1>Main Courses</h1>
                <CreateCoursesTabs type={"/main"} buttonActivate={buttonActivate} />
            </div>

            {/* Extra Courses */}
            <div className="courses">
                <h1>Extra Courses</h1>
                <CreateCoursesTabs type={"/extra"} buttonActivate={buttonActivate} />
            </div>
        </motion.div>
    );
}

export default RoadMap;