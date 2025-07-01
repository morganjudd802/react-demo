import './Home.scss';
import pepeHappy from '@/assets/pepe-happy.png';

export const Home = () => {
    return (
      <div className={'home-main-container'}>
          <h3>Welcome to my React Demo project</h3>
          <div className={'home-content-container'}>
              <p>This is an attempt to learn how React works and to create demos for all its main features.</p>
              <p>Use the navigation on the left to view various examples.</p>
              <div className={'image-container'}>
                  <img src={pepeHappy} alt={'yee'} width={'50px'} />
              </div>
          </div>
      </div>
    );
}