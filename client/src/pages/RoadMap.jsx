import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/RoadMap.css";

const requestURL = "http://localhost:8080/road-map";

function CreateCoursesTabs({ type }) {
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
                <button key={index} className="courseButtons">
                    <h1>{course.name}</h1>
                    <p>Tier: {course.tier}</p>
                </button>
            ))}
        </>
    );
}

function RoadMap() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
        >
            {/* Main Courses */}
            <div className="courses">
                <h1>Main Courses</h1>
                <CreateCoursesTabs type={"/main"} />
            </div>

            {/* Extra Courses */}
            <div className="courses">
                <h1>Extra Courses</h1>
                <CreateCoursesTabs type={"/extra"} />
            </div>
        </motion.div>
    );
}

export default RoadMap;