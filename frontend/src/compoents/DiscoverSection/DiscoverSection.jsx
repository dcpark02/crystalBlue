import PropTypes from "prop-types";
import React from "react";
import DiscoverSuggestion from "../DiscoverSuggestion/DiscoverSuggestion";
import "./style.css";

function DiscoverSection({
  className,
}) {
  return (
    <div className={`discover-section-in ${className}`}>
      <img
        className="frame-31"
        alt="Frame"
        src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/frame-24.svg"
      />
      <div className="text-wrapper-33">Popular Search</div>
      <div className="rectangle-7" />
      <DiscoverSuggestion
        className="discover-suggestion-prompt"
        question="Which company performed the worst in human rights SDGs this quarter?"
        answer="A report by the World Benchmarking Alliance found that nearly half of the 229 major global corporations surveyed had at least one allegation of a serious human rights issue levied against them, but only four percent of companies adequately remedied the situation with the victim. The report also highlighted that the automotive industry earned the worst ranking since the benchmark was first published in 2017."
        viewCount="446"
        shareCount="21"
        likeCount="5"
      />
      <DiscoverSuggestion
        className="discover-suggestion-instance"
        question="How did Apple’s Foxconn scandals affect its ESG rating?"
        answer="The impact of Apple's Foxconn scandals on its ESG rating is not clear from the search results. Some articles suggest that the Foxconn debacle highlights the need for regulatory intervention and non-compliance to be punished. However, other sources criticize ESG reporting as a false construct that skews free markets and creates undue influence."
        viewCount="196"
        shareCount="40"
        likeCount="3"
      />
    </div>
  );
};

DiscoverSection.propTypes = {
  discoverSuggestionFrame: PropTypes.string,
  discoverSuggestionSvg: PropTypes.string,
  discoverSuggestionImg: PropTypes.string,
  discoverSuggestionSvg1: PropTypes.string,
};


export default DiscoverSection;