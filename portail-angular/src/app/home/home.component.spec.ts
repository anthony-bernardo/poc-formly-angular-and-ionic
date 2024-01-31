import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/angular'
import { HomeComponent } from './home.component'
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { formlyConfig } from '../app.config';
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

describe('Form', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot(formlyConfig),
      ],
    });
  });

  const lastnameField = () => screen.getByLabelText('Nom *')
  const firstnameField = () => screen.getByLabelText('Prénom *')
  const isInOtherStateCheckbox = () => screen.getByLabelText('Hors canton ?')
  const stateField = async () => await screen.findByPlaceholderText('Choisir un canton')
  const submitButton = () => screen.getByRole('button', { name: 'Envoyer' })


  describe('display error', () => {
    test('when firstname is not filled', async () => {
      await render(HomeComponent)

      user.type(lastnameField(), 'Gates')
      user.click(submitButton())

      const errorMessageList = await screen.findAllByText('Le champs est obligatoire')
      expect(errorMessageList[0]).toBeInTheDocument()
    })

    test('when lastname is not filled', async () => {
      await render(HomeComponent)

      user.type(firstnameField(), 'Bill')
      user.click(submitButton())

      const errorMessageList = await screen.findAllByText('Le champs est obligatoire')
      expect(errorMessageList[0]).toBeInTheDocument()
    })
  })

  describe('display state field', () => {
    test('when "is in other state" is checked', async () => {
      const user = userEvent.setup()

      await render(HomeComponent)

      const checkbox = await isInOtherStateCheckbox()
      user.click(checkbox)

      const field = await stateField()
      expect(field).toBeInTheDocument()


    })
  })

  describe('display states list', () => {
    test('when state name is typed', async () => {
      const { container } = await render(HomeComponent)

      // type "Gen"
      const autoComplete = screen.getByRole("combobox");
      fireEvent.click(autoComplete);
      fireEvent.input(autoComplete, { target: { value: 'Gen' } })

      const valais = await screen.queryByText('Valais');
      expect(valais).not.toBeInTheDocument();

      const geneve = await screen.queryByText('Genève');
      expect(geneve).toBeInTheDocument();
    })
  })

})

