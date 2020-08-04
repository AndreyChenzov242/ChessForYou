import React from 'react';

//Components

import Button from "../../../components/atoms/Button";
import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { LogInModal } from './LogInModal';
import { BurgerMenu } from './BurgerMenu';
//Styles
import "./styles.scss";

export class Header  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModalOpen: false,
      inputValue: '',
      modalData: {},
      todoList: [],
      isBurgerMenuOpen: false,
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
    //console.log("im here");
    this.setState(prevState => ({
      isBurgerMenuOpen: !prevState.isBurgerMenuOpen,
    }));
    // console.log(isBurgerMenuOpen);
  };

  onShowBurgerMenu = () => {
    this.toggleBurgerMenu();
  };


  render() {
    const { todoList, inputValue, isEditModalOpen, modalData,isBurgerMenuOpen } = this.state;

  return (
    <header className="header ds">
      <ContentWidthLimiter>
        <div className="header-wrapper">
          <a href="/" className="header-wrapper__logo"></a>
          <div className="button-wrapper">
              <Button margin="mr-md" color="yellow" onClick={() => this.onShowLogInModal()}>
                Вход
              </Button>
              <Button color="yellow" onClick={() => this.onShowLogInModal()}>
                Регистрация
              </Button>
          </div>

          <div className="hamburger click" id="hamburger"  >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
          </div>

        </div>
      
      <BurgerMenu open={isBurgerMenuOpen}  onClose={this.toggleBurgerMenu}/>


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
