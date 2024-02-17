<template>
  <section class="m-auto mt-[5rem]">
    <h1 class="w-full items-center text-center text-[1.5rem] font-extrabold dark:text-white">
      Create a account
    </h1>

    <form class="mx-auto max-w-md">
      <div class="group relative z-0 mb-5 w-full">
        <input id="floating_email" type="email" name="floating_email" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
        <label for="floating_email" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium rtl:peer-focus:left-auto peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Email address</label>
      </div>
      <div class="group relative z-0 mb-5 w-full">
        <input id="floating_password" type="password" name="floating_password" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
        <label for="floating_password" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Password</label>
      </div>
      <div class="group relative z-0 mb-5 w-full">
        <input id="floating_repeat_password" type="password" name="repeat_password" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
        <label for="floating_repeat_password" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Confirm password</label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="group relative z-0 mb-5 w-full">
          <input id="floating_first_name" type="text" name="floating_first_name" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
          <label for="floating_first_name" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">First name</label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input id="floating_last_name" type="text" name="floating_last_name" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
          <label for="floating_last_name" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Last name</label>
        </div>
      </div>

      <button type="submit" class="m-auto w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm text-white font-medium sm:w-full dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Create your account
      </button>
    </form>
  </section>
</template>
