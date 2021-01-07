from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from .models import CustomUser
from .serializer import CustomUserSerializer
from rest_framework.response import Response


class UserCreateAPI(APIView):
    def get(self, request):
        user = CustomUser.objects.all()
        serializer = CustomUserSerializer(user,many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)