import React from 'react';

// Modules

import classnames from "classnames";

//Components

import { Button } from "../../../components/atoms/Button";
import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { LogInModal } from './LogInModal';
import { HeaderSideBar } from './HeaderSideBar';


//Styles

import "./styles.scss";

// ----------------

export class Header  extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isEditModalOpen: false,
      isBurgerMenuOpen: false,
      hamburgerActive:false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isEditModalOpen: !prevState.isEditModalOpen,
    }));
  };
  
  onShowLogInModal = () => {
    this.toggleModal();
  };

  toggleBurgerMenu = () => {
    this.setState(prevState => ({
      isBurgerMenuOpen: !prevState.isBurgerMenuOpen,
    }));
  };

  onShowBurgerMenu = () => {
    this.toggleBurgerMenu();
  };

  setHamburgerActive = () =>{
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive,
    }));
  }

  
  render() {
    const { isEditModalOpen,isBurgerMenuOpen,hamburgerActive } = this.state;
    const hamburgerClass = classnames({
      hamburger: true,
      [`hamburger--active`]: hamburgerActive,
    });

  return (
    <header className="header ds">
      <ContentWidthLimiter>
        <div className="header-wrapper">
          <a href="/" className="header-wrapper__logo"></a>
          <div className="buttons-wrapper">
              <Button margin="mr-md" color="yellow" onClick={() => this.onShowLogInModal()}>
                Вход
              </Button>
              <Button color="yellow" onClick={() => this.onShowLogInModal()}>
                Регистрация
              </Button>
          </div>

          <div className={hamburgerClass}  onClick={() => (this.onShowBurgerMenu(),this.setHamburgerActive())}  >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
          </div>

        </div>
      
      <HeaderSideBar open={isBurgerMenuOpen} onLog={this.onShowLogInModal}/>


        <LogInModal
              onClose={this.toggleModal}
            //  onSave={this.onSaveHandler}
            //  title="Edit todo modal"
            // data={modalData}
             open={isEditModalOpen}
          /> 
      </ContentWidthLimiter>
    </header>
  );
  }
}
