import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-reactive-forms',
  templateUrl: './demo-reactive-forms.component.html',
  styleUrls: ['./demo-reactive-forms.component.css']
})
export class DemoReactiveFormsComponent implements OnInit {
  monForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.monForm = this.fb.group(
      {
        nom: ['a', [Validators.required, Validators.minLength(2)]],
        prenom: [
          '',
          {
            // validateurs niveau contrôle
            validators: []
            // asyncValidators: [this.matriculeValidator]
          }
        ]
      },
      // validateurs niveau formulaire
      {
        validators: [this.nomPrenomIdentiqueValidator],
        asyncValidators: []
      }
    );
  }

  nomPrenomIdentiqueValidator(ctrl: FormGroup): ValidationErrors | null {
    const nomSaisie = ctrl.get('nom').value;
    const prenomSaisie = ctrl.get('prenom').value;

    if (nomSaisie === prenomSaisie) {
      return { nomPrenomIdentique: 'même nom et prénom' };
    }

    return null;
  }

  matriculeValidator(ctrl: FormControl): Observable<ValidationErrors> | null {
    return null;
  }

  ngOnInit() {}

  get nom() {
    return this.monForm.get('nom');
  }

  valider() {
    console.log(this.monForm.errors);
  }
}
