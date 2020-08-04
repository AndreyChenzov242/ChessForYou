import React from 'react';

//Components

import Button from "../../../components/atoms/Button";
import { ContentWidthLimiter } from "../../../components/ContentWidthLimiter";
import { LogInModal } from './LogInModal';

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
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isEditModalOpen: !prevState.isEditModalOpen,
    }));
  };

  onShowEditModal = () => {
    console.log("gello");
    this.toggleModal();
  };

  render() {
    const { todoList, inputValue, isEditModalOpen, modalData } = this.state;

  return (
    <header className="header ds">
      <ContentWidthLimiter>
        <div className="header-wrapper">
          <a href="/" className="header-wrapper__logo"></a>
          <div className="button-wrapper">
              <Button margin="mr-md" color="yellow" onClick={() => this.onShowEditModal()}>
                Вход
              </Button>
              <Button color="yellow" >
                Регистрация
              </Button>
          </div>

          <div className="hamburger click" id="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
          </div>
        </div>

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
