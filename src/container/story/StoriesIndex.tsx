import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorComp from "src/components/story/Error";
import StoryItem from "src/components/story/StoryItem";
import { fetchStories } from "../../core/store/reducers/blogReducers/storiesSlice";
import { RootState } from "../../core/store/reducers/rootReducer";

function StoriesIndex() {
  const dispatch = useDispatch();
  const { stories, error, status } = useSelector(
    (state: RootState) => state.stories
  );
  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <main>
      <section className="main-story-wrapper">
        <div className="main-story__container">
          {(() => {
            switch (status) {
              case "idle":
                return <h1 className="stories-loading">Loading...</h1>;

              case "pending":
                return <h1 className="stories-loading"> Fetching data...</h1>;

              case "rejected":
                return <ErrorComp errorMessage={error} />;

              case "resolved":
                return stories.map((story) => (
                  <StoryItem {...story} key={story.id} />
                ));

              default:
                break;
            }
          })()}
        </div>
        <aside>
          <h1 className = "aside-header">Latest News</h1>
        </aside>
      </section>
    </main>
  );
}

export default StoriesIndex;
