"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation"; // Import the useParams hook
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

const Project = () => {
    const params = useParams(); // Fetch params using useParams
    const id = params?.id as string; // Assert that id is a string

    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
        <div>
            {/* MODAL NEW TASKS */}
            <ModalNewTask
                isOpen={isModalNewTaskOpen}
                onClose={() => setIsModalNewTaskOpen(false)}
                id={id}
            />

            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Timeline" && (
                <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Table" && (
                <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    );
};

export default Project;
