import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";

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
        <div>
            {courses.map((course, index) => (
                <div key={index} className="courses">
                    <h1>{course.name}</h1>
                    <p>{course.tier}</p>
                </div>
            ))}
        </div>
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
            <CreateCoursesTabs type={"/main"} />

            {/* Extra Courses */}
        </motion.div>
    );
}

export default RoadMap;