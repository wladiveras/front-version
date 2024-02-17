<template>
  <section class="m-auto mt-[5rem]">
    <h1 class="w-full items-center text-center text-[1.5rem] font-extrabold dark:text-white">
      Sign in to our Stove dashboard
    </h1>

    <form class="mx-auto mt-[5rem] max-w-md">
      <div class="group relative z-0 mb-5 w-full">
        <input id="floating_email" type="email" name="floating_email" class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-2xl text-gray-900 dark:border-gray-600 focus:border-blue-600 dark:text-white focus:outline-none focus:ring-0 dark:focus:border-blue-500" placeholder=" " required>
        <label for="floating_email" class="absolute top-3 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:start-0 -z-10 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-placeholder-shown:scale-100 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:font-medium rtl:peer-focus:left-auto peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500">Email address</label>
      </div>
      <button type="submit" class="m-auto w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm text-white font-medium sm:w-full dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login to your account
      </button>
    </form>
  </section>
</template>
