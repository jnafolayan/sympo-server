import bcrypt from "bcryptjs";

const defaultSalt = 11;

export async function createHash(plain, salt) {
  return bcrypt.hash(plain, salt || defaultSalt);
}

export async function compareHash(plain, hash) {
  return bcrypt.compare(plain, hash);
} 