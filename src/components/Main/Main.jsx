import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // ✅ Added Link for navigation
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <a href="/" className="AskMedicine">AskMedicine</a>

        <div className="nav-right">
          <div className='innerNav'>
            {/* ✅ Replaced buttons with Link for navigation */}
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/guidelines" className="nav-button">Guidelines</Link>
            <Link to="/druginteractions" className="nav-button">Drug Interactions</Link>
          </div>
          <img src={assets.person_icon} alt="" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              {/* <p><span>Hello, Dev.</span></p> */}
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest medicine for fever</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest medicine for fever</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest medicine for fever</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest medicine for fever</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.person_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <img src={assets.mic_icon} alt="" />
            {input ? <img onClick={() => onSent(input)} src={assets.send_icon} alt="" /> : null}
          </div>
          <p className="bottom-info">
            AskMedicine may display inaccurate info, double check its response
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
