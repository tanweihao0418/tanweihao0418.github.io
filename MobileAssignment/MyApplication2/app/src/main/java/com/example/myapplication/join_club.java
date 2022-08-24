package com.example.myapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.navigation.Navigation;

public class join_club extends Fragment {
        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            // Inflate the layout for this fragment
            View view = inflater.inflate(R.layout.fragment_join_club, container, false);

            view.findViewById(R.id.join_club_btn1).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_joinclub_to_dashboard);
                }
            });

            //        navbar
            view.findViewById(R.id.friend_ico).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_dashboard_to_friendlist);
                }
            });

            view.findViewById(R.id.club_ico).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_dashboard_to_myclub);
                }
            });
            view.findViewById(R.id.home_ico).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_dashboard_to_dashboard);
                }
            });
            view.findViewById(R.id.scoreboard_ico).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_dashboard_to_create_session);
                }
            });
            view.findViewById(R.id.profile_ico).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Navigation.findNavController(view).navigate(R.id.action_dashboard_to_myprofile);
                }
            });

            return view;
        }
}
