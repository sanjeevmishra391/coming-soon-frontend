import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useApi from "../../hooks/useApi";
import Loading from "../misc/Loading";
import users from "../../api/users";
import Card from "../misc/Card";
import "./Aboutus.css";
// import Footer from "../misc/Footer";

function Aboutus() {
  const { loading, request: getTeamMembers } = useApi(users.getteam);
  const [members, setMembers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(async () => {
    const response = await getTeamMembers(1);
    if (response.ok) setMembers(response.data.result.data);
  }, []);

  const fetchData = async () => {
    const persons = await getTeamMembers(page);

    setMembers([...members, ...persons.data.result.data]);
    console.log("next: ", persons.data.result.next);
    if (persons.data.result.next === undefined) {
      setHasMore(false);
    }
    setPage((prev) => prev + 1);
  };

  return (
    <React.Fragment>
      <div className={"watermark"}></div>
      <div className={"intro"}>
        <div className={"liner-container hr-center"}>
          <p>Dedicated Teams.</p>
          <p>To Enhance Your Learning.</p>
        </div>
        <div className={"about-container hr-center"}>
          <div className={"about-us box-style"}>
            <h2>About Us</h2>
            <p>
              CipherSchools is a Potential Multi-Billion Dollar Organization
              founded in 2020 with a vision to be amongst the Top 10
              Organizations in the world within the next 10 Years. An online
              education platform that provides different Programs across formal
              and informal education. CipherSchools endows students to touch
              their full potential through relevant and pre-evaluated online
              programs delivered in the most engaging learning environment.
              CipherSchools is driven by commitment, poised to revolutionize the
              learning platform.
            </p>
          </div>
        </div>
      </div>

      <div className={"meet-team hr-center"}>
        <h2>Meet the believers of our journey so far!</h2>
      </div>

      <div className={"team-container hr-center"}>
        <div className={"team-member-container"}>
          <InfiniteScroll
            dataLength={members.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<Loading type="list" />}
            className="team-members"
          >
            {members.map((member) => {
              return <Card name={member.name} image={member.image} />;
            })}
          </InfiniteScroll>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Aboutus;
