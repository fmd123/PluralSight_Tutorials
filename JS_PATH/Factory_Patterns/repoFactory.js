var repoFactory = function () {
//checks for which repo is being called for
//and returns a require to that particular repo.a
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};


module.exports = new repoFactory;
