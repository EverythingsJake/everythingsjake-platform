export async function GET() {
  return Response.json({
    ok: true,
    service: "everythingsjake",
    ts: new Date().toISOString(),
  });
}
