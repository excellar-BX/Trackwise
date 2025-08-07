"use client";
import React, { useState } from "react";
import {
  BiCheckCircle,
  BiFileBlank,
  BiLoaderCircle,
  BiTimer,
  BiFilter,
} from "react-icons/bi";

// Mock auth context for demo
const useAuth = () => ({ user: { name: "Excellence" } });

type TasksProps = {
  id: number;
  title: string;
  status: string;
  created: string;
};

type FormDataProps = {
  title: string;
  status: string;
};

const Dashboard = () => {
  const { user } = useAuth();

  const Tabs = [
    { key: "pending", label: "Pending ", icon: <BiTimer /> },
    { key: "in-progress", label: "In Progress ", icon: <BiLoaderCircle /> },
    { key: "completed", label: "Completed ", icon: <BiCheckCircle /> },
  ];

  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: 1,
      title: "Complete project proposal",
      status: "pending",
      created: "2025-08-05",
    },
    {
      id: 2,
      title: "Review team feedback",
      status: "in-progress",
      created: "2025-08-04",
    },
    {
      id: 3,
      title: "Update documentation",
      status: "completed",
      created: "2025-08-03",
    },
  ]);

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentTask, setCurrentTask] = useState<TasksProps | null>(null);
  const [formData, setFormData] = useState<FormDataProps>({
    title: "",
    status: "pending",
  });

  const filteredTasks =
    activeTab === "all"
      ? tasks
      : tasks.filter((task) => task.status === activeTab);

  // Get task counts for each status
  const getTaskCount = (status: string) => {
    return tasks.filter((task) => task.status === status).length;
  };

  const openModal = (task: TasksProps | null = null) => {
    if (task) {
      setCurrentTask(task);
      setFormData({ title: task.title, status: task.status });
    } else {
      setCurrentTask(null);
      setFormData({ title: "", status: "pending" });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTask(null);
    setFormData({ title: "", status: "pending" });
  };

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("Please enter a task title");
      return;
    }

    if (currentTask) {
      // Edit existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === currentTask.id
            ? { ...task, title: formData.title.trim(), status: formData.status }
            : task
        )
      );
    } else {
      // Add new task
      const newTask: TasksProps = {
        id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
        title: formData.title.trim(),
        status: formData.status,
        created: new Date().toISOString().split("T")[0],
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    closeModal();
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="my-10 mx-3 sm:mx-10">
      <div className="my-10 text-3xl">Welcome, {user?.name}</div>

      {/* Status Cards */}
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-between  items-center gap-5 mb-8">
        {Tabs.map((data) => (
          <div
            key={data.key}
            className="w-full min-w-[250px] max-sm:max-w-[400px]  p-5 flex flex-row items-center rounded-xl bg-white shadow-sm border"
          >
            <div
              className={`w-[20%] ${
                data.key === "pending"
                  ? "bg-amber-100"
                  : data.key === "in-progress"
                  ? "bg-blue-100"
                  : "bg-green-100"
              } h-14 mx-2 rounded-xl flex items-center justify-center text-3xl ${
                data.key === "pending"
                  ? "text-amber-500"
                  : data.key === "in-progress"
                  ? "text-blue-500"
                  : "text-green-500"
              }`}
            >
              {data.icon}
            </div>
            <div>
              <p className="font-bold text-xl">{data.label}</p>
              <p className="text-gray-600">
                {getTaskCount(data.key)} Tasks {data.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-row max-sm:flex-col gap-y-5 sm:justify-between sm:items-center mb-6">
        <div className="text-gray-600 font-semibold ">
          Showing {filteredTasks.length} task
          {filteredTasks.length !== 1 ? "s" : ""}
          {activeTab !== "all" && (
            <span className="ml-2 text-green-600 font-medium">
              (Filtered by: {activeTab.replace("-", " ")})
            </span>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-green-600/80 bg-green-600"
            >
              <BiFilter className="text-white" />
              <span className="text-sm text-white ">Filter</span>
            </button>

            {showFilterDropdown && (
              <div className="absolute -right-28 sm:right-0 mt-2 w-48 border border-gray-200 text-white bg-green-600 text-xl rounded-lg shadow-lg z-10">
                <div className="">
                  <button
                    onClick={() => {
                      setActiveTab("all");
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-green-300/40 ${
                      activeTab === "all"
                        ? "bg-green-300 text-green-600 font-medium"
                        : "text-white"
                    }`}
                  >
                    All Tasks ({tasks.length})
                  </button>
                  {Tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-green-300/40  flex items-center space-x-2 ${
                        activeTab === tab.key
                          ? "bg-green-300 text-green-600 font-medium"
                          : "text-white"
                      }`}
                    >
                      {tab.icon}
                      <span>
                        {tab.label} ({getTaskCount(tab.key)})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => openModal()}
            className="bg-green-600 hover:bg-green-600/80 text-white px-4 py-2 rounded-lg font-medium"
          >
            Add New Task
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-lg border min-w-0 w-full  ">
        {filteredTasks.length === 0 ? (
          <div className="p-8 text-center text-gray-500 ">
            No tasks found for this status
          </div>
        ) : (
        <div className=" w-full overflow-x-scroll">
            <table className=" w-full">
            <thead className="bg-green-500/50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium font-Satoshi-bold text-black/70 uppercase tracking-wider whitespace-nowrap">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium font-Satoshi-bold text-black/70 uppercase tracking-wider">
                  Task
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium font-Satoshi-bold text-black/70 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium font-Satoshi-bold text-black/70 uppercase tracking-wider whitespace-nowrap">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium font-Satoshi-bold text-black/70 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{task.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 min-w-0">
                    <div className="truncate">{task.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status.replace("-", " ")}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openModal(task)}
                        className="bg-green-600/90 hover:bg-green-600 text-white px-4 py-2 rounded-full text-xs font-medium outline-none border-none whitespace-nowrap"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-xs font-medium outline-none border-none whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {currentTask ? "Edit Task" : "Add New Task"}
            </h2>
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter task title"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-600 hover:bg-green-600/80 text-white py-2 px-4 rounded-lg font-medium"
                >
                  {currentTask ? "Update Task" : "Add Task"}
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close filter dropdown */}
      {showFilterDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowFilterDropdown(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
