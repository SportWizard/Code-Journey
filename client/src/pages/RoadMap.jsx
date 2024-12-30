import { motion } from "framer-motion";

function CreateCoursesTabs({ courses }) {
    return (
        <>
            
        </>
    );
}

function RoadMap() {

    const mainCourses = [
        ["Python"],
        ["Java"],
        ["Advance Java"],
        ["Data Structures"],
        ["Advance Data Structure", "Software Design"],
    ];
    const extraCourses = [
        ["Web Development"],
        ["Version Control"],
        [],
        [],
        ["Database"]
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
        >
            {/* Main Courses */}
            <div style={{ backgroundColor: "#2C3E50" }}>
                <CreateCoursesTabs courses={mainCourses} />
            </div>

            {/* Extra Courses */}
            <div style={{ backgroundColor: "#FFD54F" }}>
                Hello
            </div>
        </motion.div>
    );
}

export default RoadMap;