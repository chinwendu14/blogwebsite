import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Cards from "../components/card/Cards";
import { blogApi } from "../restApi/api";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SpinnerLoader from "../components/spinnerLoader/SpinnerLoader";
const Home = () => {
  const [blogItem, setBlogItem] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const router = useNavigate();

  useEffect(() => {
    try {
      const getUsers = async () => {
        const userList = await blogApi();

        const response = userList.data;
        if (response) {
          setBlogItem(response.slice(0, 12));
        }
      };
      getUsers();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePageClick = async (data: any) => {
    const currentPage = data.selected + 1;
    const refreshUser = await blogApi();
    const response = refreshUser.data;
    if (currentPage) {
      setBlogItem(response.slice(currentPage * 12 - 12, currentPage * 12));
    }
  };

  const handlesearch = async (e: any) => {
    const SearchResult = e.target.value;
    setSearchValue(SearchResult);
    const orgList = await blogApi();
    if (searchValue !== "") {
      const filterSearch = orgList.data.filter((item: any) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setBlogItem(filterSearch);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Header onChange={handlesearch} value={searchValue} />
        <div className="bg-gray-200 bg-opacity-25  p-12 ">
          {!blogItem && <SpinnerLoader />}
          <div className=" grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
            {blogItem.map((item: any) => {
              return (
                <Cards
                  key={item.id}
                  text={item.body.slice(0, 60)}
                  headerText={item.title}
                  onClickbtn={() => router(`/blog-detail/${item.id}`)}
                  onClickcomment={() => router(`/blog-detail/${item.id}`)}
                  onClickheader={() => router(`/blog-detail/${item.id}`)}
                />
              );
            })}
          </div>
          <div className="my-10 ">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageCount={9}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              previousLabel="<"
              containerClassName="flex justify-end items-center"
              pageClassName="px-4 py-2 m-3 bg-blue-200 shadow-sm rounded-md hover:bg-white hover:text-black "
              pageLinkClassName="page-link"
              previousClassName="px-4 py-2 m-3 bg-blue-200 shadow-sm rounded-md hover:bg-white hover:text-black"
              nextClassName="px-4 py-2 m-3 bg-blue-200 shadow-sm rounded-md hover:bg-white hover:text-black"
              activeClassName="bg-green-800 text-white"
              previousLinkClassName="page-prev"
              nextLinkClassName="page-prev"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
