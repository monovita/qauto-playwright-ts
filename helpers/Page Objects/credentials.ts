export class Credentials {
	private readonly _firstName: string;
	private readonly _lastName: string;
	private readonly _userEmail: string;
	private readonly _userPassword: string;

	constructor() {
		this._firstName = 'UserFirstName';
		this._lastName = 'UserLastName';
		this._userEmail = 'pw_user_email@mail.com';
		this._userPassword = 'UserPassword123';
	}

	get firstName(): string {
		return this._firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	get userEmail(): string {
		return this._userEmail;
	}

	get userPassword(): string {
		return this._userPassword;
	}
}
