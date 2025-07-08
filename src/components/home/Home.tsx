import './Home.scss';
import penguin from '@/assets/penguin.png';

export const Home = () => {
    const javascriptUrl = 'http://localhost:5173/javascript/javascript.html';
    return (
      <div className={'home-main-container'}>
          <h3>Welcome to my React Demo project</h3>
          <div className={'home-content-container'}>
              <p>This is an attempt to learn how React works and to create demos for all its main features.</p>
              <p>Use the navigation on the left to view various examples.</p>
              <a href={javascriptUrl}>Click here to see javascript examples</a>
              <div className={'image-container'}>
                  <img loading="eager" src={penguin} alt={'yee'} width={'50px'} />
              </div>
          </div>
      </div>
    );
}