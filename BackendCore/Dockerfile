# Use the official .NET 8 runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Use the SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["BackendCore.csproj", "./"]
RUN dotnet restore "BackendCore.csproj"
COPY . .
RUN dotnet build "BackendCore.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BackendCore.csproj" -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://0.0.0.0:8080
ENTRYPOINT ["dotnet", "BackendCore.dll"]
