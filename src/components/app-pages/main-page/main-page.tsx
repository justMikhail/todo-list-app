import TodoBoard from '../../todo-board/todo-board';
import Footer from '../../footer/footer';
import './main-page.scss';

function MainPage(): JSX.Element {

  return (
    <div className="page page--main">
      <main className="page__main">
        <div className="page__container">
          <TodoBoard />
        </div>
      </main>
      <footer className="page__footer">
        <div className="page__container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
