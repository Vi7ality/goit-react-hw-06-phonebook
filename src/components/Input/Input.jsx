import { Component } from 'react';

export class Input extends Component {
  static defaultProps = {};

    static propTypes = {};

    state = {
        name: ''
    }
    
    handleChange = (event) => {
       const { name, value } = event.currentTarget;
        this.setState(
            {[name]: value}
        )
        console.log(this.state)
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.formHandlerSubmit(this.state);
        event.currentTarget.value.reset()
        this.reset();
    }

    reset = () => {
        this.setState({
            name: ''
        })
    }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
          />
          <button>Add contact</button>
        </label>
      </form>
    );
  }
}
