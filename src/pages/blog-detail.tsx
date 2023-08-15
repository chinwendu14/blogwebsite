import React, { useEffect, useState } from "react";
import { imgView } from "../assets";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { HOME_ROUTE } from "../constants/url";
import { blogDetailApi } from "../restApi/api";
import TextField from "../components/textField/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/button/Button";
const BlogDetail = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState<any>({});
  const [showText, setshowText] = useState<boolean>(false);
  const [comment, setComments] = useState<any>([]);
  useEffect(() => {
    try {
      const getUsers = async () => {
        const userList = await blogDetailApi(id);

        const response = userList.data;
        if (response) {
          setDetailItem(response);
        }
      };
      getUsers();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const formik = useFormik<any>({
    initialValues: {
      firstname: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("first name requried"),
      message: Yup.string().required("message requried"),
    }),

    onSubmit: (values: any) => {
      setshowText(true);
      setComments((prev: any) => [
        ...prev,

        {
          nameComment: values.firstname,
          messageComment: values.message,
        },
      ]);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-gray-200 bg-opacity-25  ">
      <div
        className="flex items-center p-12 cursor-pointer"
        onClick={() => router(`${HOME_ROUTE}`)}
      >
        <BiChevronLeft className="text-5x1 " />

        <p className="">Back</p>
      </div>

      <div className="flex justify-center items-center flex-col pb-12">
        <div className=" max-w-2xl ">
          <div className="shadow-sm w-full rounded-md bg-white p-5">
            <img src={imgView} alt="img" />
            <h1 className="my-6 mb-4 font-bold text-lg"> {detailItem.title}</h1>
            <p>{detailItem.body}</p>
            {showText
              ? comment.map((item: any, i: any) => {
                  return (
                    <div className="my-6 bg-[#11632F]  text-white shadow-sm rounded-md p-4">
                      <h1>{item.nameComment}</h1>
                      <p>{item.messageComment}</p>
                    </div>
                  );
                })
              : ""}

            <form
              className="bg-gray-200 bg-opacity-25 my-4 p-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <p className="py-4">First Name</p>
                <TextField
                  value={formik.values.firstname}
                  name="firstname"
                  id="firstname"
                  onChange={formik.handleChange}
                  type="text"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    {formik.errors.firstname as string}
                  </p>
                ) : null}
              </div>
              <div>
                <p className="py-4">message</p>

                <textarea
                  className="w-full p-2 flex  shadow-sm rounded-md bg-white focus:outline-none"
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={10}
                ></textarea>

                {formik.touched.message && formik.errors.message ? (
                  <p style={{ color: "red", marginTop: "5px" }}>
                    {formik.errors.message as string}
                  </p>
                ) : null}
              </div>
              <div className="flex items-end justify-end my-5">
                <Button text="Submit" btntype="submit" />
              </div>
            </form>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
