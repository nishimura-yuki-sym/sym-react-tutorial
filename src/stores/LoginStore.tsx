import {observable, action, computed, useStrict} from 'mobx';

useStrict(true);

export default class LoginStore {

  @observable loginId = '';
  @observable password = '';
  @observable submitting = false;
  @observable errors: (Object | null) = null;

  @action setLoginId = (loginId) => {
    this.loginId = loginId;
  }
  @action setPassword = (password) => {
    this.password = password;
  }
  @action setSubmitting = (submitting) => {
    this.submitting = submitting;
  }
  @action setErrors = (errors) => {
    this.errors = errors;
  }

  @computed get errorMessageLoginId() {
    return this.errors ? this.errors['loginId'] : null;
  }

  @computed get errorMessagePassword() {
    return this.errors ? this.errors['password'] : null;
  }

  @computed get errorMessageAll() {
    return this.errors ? this.errors['all'] : null;
  }

  @computed get isSubmittable(): boolean {
    // 入力状況に応じてサブミット可能かどうかなどの制御が可能
    // (例: 全ての項目が入力されている必要があるなど)
    // return (this.loginId.length > 0 && this.password.length > 0);
    return true;
  }

}
