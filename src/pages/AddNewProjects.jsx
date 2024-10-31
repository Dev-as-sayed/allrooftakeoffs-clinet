import { Button } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/AxoisSecure/useAxiosSecure";

const AddNewProjects = () => {
  const url = "/addProject";
  const axiouSecure = useAxiosSecure();

  const handelAddNewProject = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const project = { name };

    axiouSecure
      .post(url, project)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelResetForm = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };
  return (
    <div className="min-h-screen py-4">
      {/* header and button */}
      <div className="flex h-fit my-3 items-center justify-between">
        <div>
          <p className="flex gap-3 ">
            <Link to="/users">
              <FaArrowLeftLong className="text-2xl text-textGray" />{" "}
            </Link>
            Create new Project
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-transparent text-textGray py-5">
            Reset all filed
          </Button>
          <Button className="text-white bg-primary py-5">Save Project</Button>
        </div>
      </div>

      {/* porm section on this part */}
      <div className="bg-white p-4 rounded-md">
        {/* <form action="">
          <div className="flex flex-col justify-between">
            <label>Project name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-bgGray h-8 border-2 rounded-md"
            />
          </div>
          <div className="flex w-full justify-between h-fit">
            <div className="w-[48%] h-full my-2 flex flex-col gap-y-2">
              <div className="border-2 border-bgGray p-4 rounded-md">
                <h3 className="text-xl font-semibold">Location</h3>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    name="country"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
              </div>
              <div className="border-2 border-bgGray p-4 rounded-md">
                <h3 className="text-xl font-semibold">Dateline</h3>
                <div className="flex flex-col">
                  <label>Date</label>
                  <input
                    type="text"
                    name="dateline"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-[48%] border-2 my-2 rounded-md border-bgGray p-2 min-h-full ">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">My details</h1>
                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
                <div className="flex md:justify-between md:flex-row lg:flex-row">
                  <div className="flex flex-col md:w-[48%]">
                    <label>Project name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-bgGray h-8 border-2 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col md:w-[48%]">
                    <label>Project name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-bgGray h-8 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <label>Job Description</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 text-gray-700 bg-bgGray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your message here..."
            />
          </div>
          <div className="border-2 border-bgGray rounded-md p-4 my-2">
            <h1 className="text-xl font-semibold mb-4">My details</h1>
            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </form> */}
        <form action="">
          <div className="flex flex-col sm:flex-row sm:gap-4 justify-between">
            <div className="w-full flex flex-col">
              <label>Project name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-bgGray h-8 border-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full h-fit my-4">
            <div className="w-full md:w-1/2 flex flex-col gap-y-4">
              <div className="border-2 border-bgGray p-4 rounded-md">
                <h3 className="text-xl font-semibold">Location</h3>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    name="country"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
              </div>
              <div className="border-2 border-bgGray p-4 rounded-md">
                <h3 className="text-xl font-semibold">Dateline</h3>
                <div className="flex flex-col">
                  <label>Date</label>
                  <input
                    type="text"
                    name="dateline"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 border-2 rounded-md border-bgGray p-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">My details</h1>
                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full bg-bgGray h-8 border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label>Project name</label>
                    <input
                      type="text"
                      name="name1"
                      className="w-full bg-bgGray h-8 border-2 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label>Project name</label>
                    <input
                      type="text"
                      name="name2"
                      className="w-full bg-bgGray h-8 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between my-4">
            <label>Job Description</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 text-gray-700 bg-bgGray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your message here..."
            />
          </div>

          <div className="border-2 border-bgGray rounded-md p-4 my-4">
            <h1 className="text-xl font-semibold mb-4">My details</h1>
            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="project1"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="project2"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="mb-1">Project name</label>
                <input
                  type="text"
                  name="project3"
                  className="w-full bg-bgGray h-8 border-2 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* button section on this part */}
          <div className="flex flex-col md:flex-row gap-2 ">
            <Button
              className=" w-full bg-transparent text-textGray py-5"
              onClick={handelResetForm}
            >
              Reset all filed
            </Button>
            <Button
              className="w-full text-white bg-primary py-5"
              onSubmit={handelAddNewProject}
            >
              Save Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProjects;
