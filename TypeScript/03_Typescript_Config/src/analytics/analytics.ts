let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true; // type inference
}

sendAnalytics("The data");
