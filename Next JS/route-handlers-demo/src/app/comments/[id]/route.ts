// import { redirect } from "next/navigation";
 import { comments } from "../data";

//dynamic route handlers
export async function GET(
    _request: Request,
    { params }:{params:{ id: string }}
) {
    const comment =comments.find(
        (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
}

//PATCH
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

// DELETE
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}


