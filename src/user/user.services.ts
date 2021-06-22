import fs from 'fs';

export function createUser(body: string) {
  if (!body) {
    throw new Error('BAD_REQUEST');
  }
  
  fs.writeFile('users.txt', body, (error) => {
    if (error) {
      throw new Error('SERVER_ERROR');
    }
  });
}

export function getUser(): string {
  try {
    let users: string;
    if (!fs.existsSync('users.txt')) {
      users = '';
    } else {
      users = fs.readFileSync('users.txt', 'utf8');
    }
    return users;
  } catch (error) {
    throw new Error('SERVER_ERROR');
  }
}

export function updateUser(body: string) {
  if (!body) {
    throw new Error('BAD_REQUEST');
  }
  
  fs.writeFile('users.txt', body, (error) => {
    if (error) {
      throw new Error('SERVER_ERROR');
    }
  });
}

export function deleteUser() {  
  fs.unlink('user.txt', (error) => {
    if (error) {
      throw new Error('SERVER_ERROR');
    }
  });
}