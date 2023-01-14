import { Status } from "../utils//EnumStatus";
import { AppDataSource } from "../config/DB.Config";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User)
/**
 * Get all users 
 * @returns 
 */
export const getAll = async () =>
  await userRepository.find()

/**
 * Add a new user
 * @param data 
 * @returns 
 */
export const addUser = async(data: any) =>
  await userRepository.save(data)

/**
 * Update a user with id
 * @param data 
 * @param id 
 * @returns 
 */
export const updateUser = async(data: any, id: number) =>
  await userRepository.update(id,data)

/**
 * Removes a user by id
 * @param id 
 * @returns 
 */
export const removeUser = async(id: number) => 
  await userRepository.update(id,{
        status: Status.INACTIVE
  })

/**
 * Get a user with id
 * @param id 
 * @returns 
 */
export const getUserById = async(id: number) => 
  await userRepository.findOneByOrFail({id: id})

export const login = async (username: string, pwd: string) => 
  await userRepository.findOneOrFail({
    where: {
      user_name: username,
      password: pwd,
      status: Status.ACTIVE,
    }
  })