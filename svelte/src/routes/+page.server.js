export async function load() {
  const result = await fetch('http://localhost:5000');
  const message = await result.json();

  return { message };

  // Create a user in the database
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Lucas',
  //     password: 'asdfasdf',
  //   },
  // })

  // return {
  //   message: "hello from Svelte!"
  // }
}