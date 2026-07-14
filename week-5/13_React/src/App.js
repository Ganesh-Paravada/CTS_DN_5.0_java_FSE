import React from "react";
import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {

    let show = true;

    return (
        <div>

            {show ? (

                <div className="container">

                    <div className="st2">
                        <h1>Course Details</h1>
                        <CourseDetails courses={courses} />
                    </div>

                    <div className="v1">
                        <h1>Book Details</h1>
                        <BookDetails books={books} />
                    </div>

                    <div className="mystyle1">
                        <h1>Blog Details</h1>
                        <BlogDetails blogs={blogs} />
                    </div>

                </div>

            ) : (

                <h1>No Data Available</h1>

            )}

        </div>
    );
}

export default App;